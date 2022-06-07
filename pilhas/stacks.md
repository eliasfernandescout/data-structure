E uma estrutura de dados que serve como uma colecao de elementos, e permite o acesso a somente um item
de dados armazenado; O ultimo item que foi considerado na estrutura (item do topo). Esse item pode ser
lido ou removido. Caso seja removido, teremos acesso ao item imediatamente anterior a ele que se torna
automaticamente o ultimo item da pilha (topo), e assim, sucessivamente, ate que a estrutura esteja vazia;

Por exeplo.: Array[], uma pilha de pratos onde o primeiro prato a sair sera o ultimo;

Pilha pode ser criada usando um arraym, na pilha, geralmente conseguimos acessar os dados a partir do 
ultimo dado que foi inserido;

LIFO:

FIFO:

As pilhas encontram inumeras aplicacoes em programacao e desenvolvimento de algoritmos, como por exemplo:

- avaliacao de expressoes e parsing sintatico
- algoritmos de memoria em tempo de compilacao
- implementacao de diversos algoritmos, como Grahan Scan
- Operacoes como desfazer e refazer aplicacoes
- Controle de navegacoes de browsers
- Endereco de intrucoes de microprocessadores


Alem das operacoes push e pop, existem algumas outras operacoes comuns implementadas em pulhas, como PEEK,
ISFULL e ISEMPTY.

peek - Consiste na leitura do valor armazenado no topo da pulha, sem no entanto remove-lo. As vezes chamada
de top;

isFull - Funcao utilizada para verificar se uma pilha esta cheia (ou seja, se nao e mais possivel armazenar
items);

isEmpty - Funcao que verifica se uma pilha esta vazia, ou seja, se nao e possivel continuar a remover itens;