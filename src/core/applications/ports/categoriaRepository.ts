import Categoria from 'core/domain/categorias';

export default interface CategoriaRepository {
    criaCategoria(Categoria: Categoria): Promise<Categoria>;
    deletaCategoria(idCategoria: string): Promise<any>;
    editaCategoria(idCategoria: string, Categoria: Categoria): Promise<Categoria|undefined>;
    listaCategorias(): Promise<Categoria[]>;
    retornaCategoria(idCategoria: string): Promise<any>;
}
