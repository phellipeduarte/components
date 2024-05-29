Esse é um projeto [Next.js](https://nextjs.org/) que tem o objetivo de criar componentes reutilizáveis para o projeto [Médicos do Barulho](https://medicos-barulho.vercel.app)

# Componentes Disponíveis

Atualmente, o projeto conta com os componentes:

## Button

O componente _Button_ é um botão utilizado em _links_ que têm um grau mais elevado de importância. O componente é da seguinte forma:

```tsx
export const Button = (props: ButtonProps) => {
    return (
        <div className="...">
            <a className={"... " + props.type} 
            href={props.link}> 
            {props.text} </a>
        </div>
    )
}
```

Dessa forma, o componente necessita de três parâmetros básicos, que são especificados pela interface:

```tsx
interface ButtonProps {
    text: string;
    link: string;
    type: Type;
}
```

Por fim, basta especificar o _Type_ do botão através do enum:

```tsx
export enum Type {
    Main = "bg-sky-400",
    Sec = "bg-amber-600",
}
```

Para utilizar o componente, basta importá-lo:

```tsx
import { Button, Type } from "./components/Button";

    ...

    <Button text="Home" link="/" type={Type.Main} />

    ...

```