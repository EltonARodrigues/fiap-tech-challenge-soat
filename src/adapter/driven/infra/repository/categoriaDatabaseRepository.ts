import Categoria from "core/domain/categorias";
import CategoriaModel from "../models/categoriaModel";
import CategoriaRepository from "core/applications/ports/categoriaRepository";


class CategoriasDataBaseRepository implements CategoriaRepository {
    async criaCategoria(categoria: Categoria): Promise<any> {
        try {
            return  await CategoriaModel.create(categoria);
        } catch (err: any) {
            console.log('Erro ao criar Categoria: ', err)
            return err.message
        }
    }

    async deletaCategoria(idCategoria: string): Promise<number> {
        return CategoriaModel.destroy({ where: { id: idCategoria } })

    }
    async editaCategoria(idCategoria: string, categoria: Categoria): Promise<any> {
        try {
            const categoriaAtual = await CategoriaModel.findByPk(idCategoria);

            if (categoriaAtual) {
                Object.assign(categoriaAtual, categoria);
                categoriaAtual.save()
            }
            return categoriaAtual;
        } catch (err: any) {
            console.log('Erro ao editar Categoria: ', err)
            return err.message
        }
    }

    async listaCategorias(): Promise<Categoria[]> {
        try {
            return await CategoriaModel.findAll();
        } catch (err: any) {
            console.log('Erro ao listar Categoria: ', err)
        }

        return [];
    }

    async retornaCategoria(idCategoria: string): Promise<any> {
        try {
            return await CategoriaModel.findByPk(idCategoria);;
        } catch (err: any) {
            console.log('Erro ao retornar Categoria: ', err)
        }
    }
}

export default CategoriasDataBaseRepository;