# Guia de contribuição

## Política de branches

Para o fluxo de desenvolvimento de funcionalidades seguimos o [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), onde nele são definidas os tipos de branches que serão explicadas abaixo.

### _*main*_

Branch de produção, com a versão estável mais atual do projeto. Só pode ser interagida apenas através de pull requests vindos da homolog ou hotfix branches.

### _*homolog*_

Branch de homologação, nela contém todos os pull requests fechados durante a sprint. Só pode ser interagida apenas através de pull requests vindos da develop.

### _*develop*_

Branch de desenvolvimento, agrupa o trabalho de outras branches com o objetivo de se criar uma versão de release para ser submetida à homolog. Deve ser modficada através de pull requests provenientes das feature branches.

### _*Feature Branches*_

Branches criadas a partir da develop, para o desenvolvimento de uma funcionalidade específica. Idealmente, uma feature branch deve ser referente à uma task ou sub-task do Jira, para melhor acompanhamento e rastreamento do projeto. Ao final do desenvolvimento, deve-se submeter um pull request para a develop(realizando todos os devidos conflitos). Se as modificações forem aceitas, a branch deve ser apagada.

#### _Nomenclatura_

Feature Branches devem seguir o padrão: `<tag>/<id-jira>/<nome-da-branch>`, sendo:

- `tag`: tipo da tarefa(`feat`, `refactor`, `fix`). Recomenda-se seguir as tags sugeridas pelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

- `id-jira`: id do card do Jira(`COM-42`).

- `nome-da-branch`: do que a branch se trata(`tela-de-teste`).

Então o exemplo completo ficaria: `feat/COM-42/tela-de-teste`.

### Mantendo branches atualizadas

Para um fluxo de trabalho sem grandes inconvenientes, recomenda-se manter as branches pessoais de desenvolvimento (features, hotfixes) sempre atualizadas. Antes de se submeter um pull request, deve se garantir que a branch possui todas as alterações mais recentes de sua branch de origem. Para isso, deve-se realizar um merge:

- Dentro da sua branch faça um merge da `develop`:

```sh
git pull origin develop
```

- Resolva os conflitos, caso exista, e realize o commit com a mensagem de merge padrão.

- Suba as alterações para sua branch remota:

```sh
git push origin branch-de-trabalho
```

## Política de commits

Os commits devem possuir mensagens sucintas e descritivas, explicando as modificações realizadas. Devem ser escritos em português do Brasil e no imperativo. Por exemplo:

- `git commit -m "Adiciona componente de Card"`

Ao invés de:

- `git commit -m "Adicionando componente de Card"`
