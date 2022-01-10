# 3 principais formas de acontecer uma renderização em React

## Pai para filho

Sempre que o componente Pai ter uma nova renderização, o filho automaticamente é renderizado novamente.

```tsx
  <Pai>
    <Filho />
  </Pai>
```

## Quando temos uma propriedade

Sempre que uma propriedade em um componente mudar, automaticamente o componente é renderizado novamente.

```tsx
  <Pai>
    <Filho title={value}/>
  </Pai>
```

## Atualização nos hooks

Sempre que acontece um set

```tsx
  function Componente(){
    const [estado, setEstado] = useState();
  }
```

## Fluxo de Renderização

1. Gerar uma nova versão do componente que precisa ser renderizado(Guarda em cache);
2. Comparar essa nova versão com a já salva da página;
3. Se houverem alterações(usa o algoritmo de reconciliação), o React "renderiza" essa nova versão em tela só do que precisa;