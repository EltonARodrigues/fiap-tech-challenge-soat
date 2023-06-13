import ProdutoRepository from "core/applications/ports/produtoRepository";
import { ImagensAtributos, Produto } from "core/domain/produto";
import ProdutoModel from "../models/produtoModel";
import ImagensProdutoModel from "../models/produtoImagensModel";
import CategoriaModel from "../models/categoriaModel";
import { Op } from "sequelize";


class ProdutosDataBaseRepository implements ProdutoRepository {
    async criaProduto(produto: Produto): Promise<any> {
        try {
            const produtoCriado = await ProdutoModel.create({
                ...produto,
                ...{
                    imagens: produto.imagens
                }
            }, {
                include: [
                    {
                        model: ImagensProdutoModel, as: "imagens"
                    }
                ]
            });
            return produtoCriado;
        } catch (err: any) {
            console.log('Erro ao criar Produto: ', err)
            return err.message
        }
    }

    async deletaProduto(idProduto: string): Promise<number> {
        return ProdutoModel.destroy({ where: { id: idProduto } })

    }
    async editaProduto(idProduto: string, produto: Produto): Promise<any> {
        try {
            const produtoAtual = await ProdutoModel.findByPk(idProduto);

            if (produtoAtual) {
                Object.assign(produtoAtual, produto);
                produtoAtual.save()
            }
            return produtoAtual;
        } catch (err: any) {
            console.log('Erro ao editar Produto: ', err)
            return err.message
        }
    }

    async listaProdutos(): Promise<Produto[]> {
        try {
            const produtos = await ProdutoModel.findAll({
                attributes: {
                    exclude: ['categoriaId'],
                },
                include: [
                    {
                        model: ImagensProdutoModel, as: "imagens",
                    },
                    {
                        model: CategoriaModel, as: 'categoria',
                    },
                ]
            });
            return produtos;
        } catch (err: any) {
            console.log('Erro ao listar Produto: ', err)
        }

        return [];
    }

    async retornaProduto(idProduto: string): Promise<any> {
        try {
            const produto = await ProdutoModel.findOne({
                attributes: {
                    exclude: ['categoriaId'],
                },
                include: [
                    {
                        model: ImagensProdutoModel, as: "imagens"
                    },
                    {
                        model: CategoriaModel, as: 'categoria',
                    },
                ], where: { id: idProduto }
            });
            return produto;
        } catch (err: any) {
            console.log('Erro ao retornar Produto: ', err)
        }
    }
}

export default ProdutosDataBaseRepository;