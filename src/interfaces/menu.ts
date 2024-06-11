export default interface MenuProps {
    id: number;
    attributes: {
        Platillo: string;
        Descripcion: string;
        Precio: number;
        Categoria: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Foto: {
            [x: string]: any;
                id: number;
                attributes: {
                    formats: {
                        large: {
                            url: string | null;
                        }
                    }
                }
        }
    };
  }