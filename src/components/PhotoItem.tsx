import * as C from './style';

type Props = {
    name: string,
    url: string
}
export const PhotoItem = ({name, url}: Props) => {
    return(
        <C.Container>
            <img src={url} alt={url} />
            {name}
        </C.Container>
    );
};