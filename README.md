# :sun_with_face: Theme-Light-Dark :new_moon:

## Sistema para mudar o tema de um site. Hoje em dia, os sites modernos utilizam sistemas de troca de cores para se adaptar ao ambiente em que o usuário se encontra. Este tipo de sistema, “Modo Noturno”, além de tornar o site mais agradável para o usuário, permite que ele tenha um novo visual.
## Para demonstrar o funcionamento deste sistema, foi utilizada uma única página que possui um Cabeçalho simples. O primeiro passo para esta implementação é a criação do arquivo styled.d.ts, pois este projeto foi estruturado em typescript. Este arquivo é responsável pela estrutura das cores que serão alteradas pelo sistema. Na pasta styles possui outra chamada themes, essa pasta contém os arquivos das cores dark-mode e light-mode. O arquivo Global.ts possui os estilos geral do projeto, e nele contém os primeiros passos do sistema. O "background: ${props=> props.theme.colors.background};" a função props pega a cor que está no theme.
## Na pasta utils cotém a função de armazenar o estado para o modo dark-light. Ele faz o armazenamento dessas informações localStorage.setItem(key, JSON.stringify(state)). Este arquivo atua como um gancho do sistema, por exemplo, um useState, tanto que usePersistedState.

## const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light);
## const toggleTheme = ()=>{
##    setTheme(theme.title === 'light' ? dark : light);
## }

## Essas linhas de código funcionam como realmente controlando a mudança de estado. Está no arquivo App.tsx e por sua ampla funcionalidade precisa da função ThemeProvider que permite a transmissão para outras páginas.

![Image Dark_Mode](/README/DarkTheme.png)

## A função Switch faz a mudança do tema.

![Image Dark_Mode](/README/LightTheme.png)