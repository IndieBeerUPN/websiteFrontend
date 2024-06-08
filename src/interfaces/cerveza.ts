export default interface CervezaProps {
    id: number;
    attributes: {
        Estilo: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Nombre: string;
        Precio: number;
        Descripcion: string;
        Slug: string;
        Cerveza: {
            [x: string]: any;
                id: number;
                attributes: {
                    formats: {
                        large: {
                            url: string;
                        }
                    }
                }
        }
    };
  }