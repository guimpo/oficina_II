# oficina_II

Sugestão para configuração da aplicação:

Escolha um diretório em sua máquina (crie um).

1- Execute o comando:

git clone -b master --single-branch https://github.com/guimpo/oficina_II.git

Obs: Esta branch é destinada a documentação.

2- Execute o comando:

git clone -b front --single-branch https://github.com/guimpo/oficina_II.git

3- No diretório da aplicação digite o comando:

npm install

4- Digite o comando:

npm start

5- Para saber as rotas olhar no arquivo servidor.js

Obs: a aplicação ainda não irá funcionar, o back deve estar rodando também.

6- Saia do diretório da aplicação (voltar um diretório).

7- Execute o comando:

git clone -b back --single-branch https://github.com/guimpo/oficina_II.git

8- No diretório da aplicação digite o comando:

npm install

9- Digite o comando:

npm start

10- Acesse pelo navegador (testado somente no chrome):

https:localhost:3000

Obs: não esqueça do 's'.

11- Autorize o acesso.

Obs: o certificado de segurança é auto-assinado, por isso o navegador irá bloquear.

Agora sua aplicação deve estar funcionando.

Para fazer o push no front:

git push origin front

Para fazer o push no back:

git push origin back

Não está completa. 

Olhando as rotas no front (servidor.js) é possível saber qual página está disponível.

Olhando nos scripts de ajax é possível saber o que está sendo enviado para o back e o que está sendo retornado.


