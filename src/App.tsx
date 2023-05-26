import { FormEvent, useEffect, useState } from 'react';
import * as C from './App.styles';
import { Photo } from './types/Photo';
import * as sPhoto from './service/Photos';
import { PhotoItem } from './components/PhotoItem';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);


  useEffect( ()=>{
    const getPhoto = async () => {
      setLoading(true);
      setPhotos(await sPhoto.GetAll());
      setLoading(false);
    }
    getPhoto();
  }, []);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    const name = formData.get('namePhoto') as string;

    if(file && file.size > 0){
      setUploading(true);
      let result = await sPhoto.addPhoto(file, name);
      setUploading(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newPhoto =[...photos]
        newPhoto.push(result);
        setPhotos(newPhoto);
      }
    }
  };
  
  return (
    <C.Container>
      <C.Body>
        <C.Header>
            Galeria de Fotos
        </C.Header>
        <C.AddPhoto>
          <form method='POST' onSubmit={submit}>
            <input type='file' name='image'/>
            <input type='text' name='namePhoto' placeholder='Nome da Foto'/>
            <input type='submit' name='enviar'/>
            {uploading && 'Enviando...'}
          </form>
        </C.AddPhoto>
        <C.Gallery>
          {loading && 
            <C.Warning>
              <div className='emoji'>✋</div>
              <div>Carregando...</div>
            </C.Warning>
          }
          {!loading && photos.length > 0 &&
            photos.map((item, index)=>(
              <PhotoItem key={index} name={item.name} url={item.url} />
            ))
          }
          {!loading && photos.length === 0 && 
            <C.Warning>
              <div className='emoji'>⚠️</div>
              <div>Não há fotos cadastradas</div>
            </C.Warning>
          }
        </C.Gallery>
      </C.Body>
    </C.Container>
  );
}

export default App;
