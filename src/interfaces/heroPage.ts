export default interface heroPageProps {
    id: number;
    attributes: {
        [x: string]: any;
        litrosEnTap: number,
        latasDeCerveza: string,
        tituloDeLaSeccionAbout: string,
        desripcion1DeLaSeccionAbout: string,
        descripcion2DeLaSeccionAbout: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        Portada: {
            [x: string]: any;
                id: number;
                attributes: {
                    url: string;
                }
        }
        foto1DeLaSeccionAbout: {
            [x: string]: any;
                id: number;
                attributes: {
                    formats: {
                        medium: {
                            url: string;
                        }
                    }
                }
        }
        foto2DeLaSeccionAbout: {
            [x: string]: any;
                id: number;
                attributes: {
                    formats: {
                        medium: {
                            url: string;
                        }
                    }
                }
        }
    };
  }