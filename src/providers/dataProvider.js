import fakeDataProvider from "ra-data-fakerest";

export const dataProvider = fakeDataProvider({
  clients: [
    {
      nome: "Priscila Aparecida Ramos",
      idade: 73,
      cpf: "921.011.322-57",
      rg: "12.179.794-6",
      data_nasc: "27/11/1948",
      sexo: "Feminino",
      signo: "Sagitário",
      mae: "Laís Gabriela Adriana",
      pai: "Nelson Carlos Eduardo Roberto Ramos",
      email: "priscilaaparecidaramos_@yahoo.com.com.br",
      senha: "GdQNgba4oo",
      cep: "59123-595",
      endereco: "Rua Professor Maria Enaídes",
      numero: 102,
      bairro: "Pajuçara",
      cidade: "Natal",
      estado: "RN",
      telefone_fixo: "(84) 2962-5975",
      celular: "(84) 98392-1059",
      altura: "1,81",
      peso: 58,
      tipo_sanguineo: "AB+",
      cor: "roxo",
    },
    {
      nome: "Enrico Isaac Thales Monteiro",
      idade: 48,
      cpf: "795.906.407-53",
      rg: "49.327.961-1",
      data_nasc: "06/03/1973",
      sexo: "Masculino",
      signo: "Peixes",
      mae: "Márcia Juliana Luna",
      pai: "Benício Victor Monteiro",
      email: "enricoisaacthalesmonteiro-88@grupogil.com.br",
      senha: "CuujszLN25",
      cep: "29062-530",
      endereco: "Rua Álvaro da Silva Labuto",
      numero: 787,
      bairro: "Morada de Camburi",
      cidade: "Vitória",
      estado: "ES",
      telefone_fixo: "(27) 2740-3259",
      celular: "(27) 98235-1408",
      altura: "1,78",
      peso: 51,
      tipo_sanguineo: "AB-",
      cor: "vermelho",
    },
    {
      nome: "Leandro Vicente Farias",
      idade: 41,
      cpf: "370.731.230-52",
      rg: "43.870.618-3",
      data_nasc: "01/02/1980",
      sexo: "Masculino",
      signo: "Aquário",
      mae: "Elza Tereza",
      pai: "Luan Juan Farias",
      email: "lleandrovicentefarias@moncoes.com.br",
      senha: "Ostb5GdLOQ",
      cep: "09071-070",
      endereco: "Rua Aquário",
      numero: 186,
      bairro: "Vila Guiomar",
      cidade: "Santo André",
      estado: "SP",
      telefone_fixo: "(11) 2926-8960",
      celular: "(11) 98145-6294",
      altura: "1,86",
      peso: 78,
      tipo_sanguineo: "A+",
      cor: "vermelho",
    },
    {
      nome: "Mirella Liz da Mata",
      idade: 50,
      cpf: "573.135.077-98",
      rg: "41.501.221-1",
      data_nasc: "19/04/1971",
      sexo: "Feminino",
      signo: "Áries",
      mae: "Jennifer Julia Carolina",
      pai: "Geraldo Alexandre da Mata",
      email: "mirellalizdamata-96@freitasprior.com.br",
      senha: "kup32Ba5xM",
      cep: "70655-600",
      endereco: "Quadra SHCES Quadra 611",
      numero: 652,
      bairro: "Cruzeiro Novo",
      cidade: "Brasília",
      estado: "DF",
      telefone_fixo: "(61) 3989-8989",
      celular: "(61) 98397-2719",
      altura: "1,67",
      peso: 81,
      tipo_sanguineo: "B-",
      cor: "roxo",
    },
    {
      nome: "Nathan João da Costa",
      idade: 66,
      cpf: "091.964.684-08",
      rg: "21.618.067-3",
      data_nasc: "26/09/1955",
      sexo: "Masculino",
      signo: "Libra",
      mae: "Sônia Laura",
      pai: "Pietro Thales Felipe da Costa",
      email: "nnathanjoaodacosta@academiagolf.com.br",
      senha: "Z8hj7LAoDZ",
      cep: "87035-560",
      endereco: "Avenida das Torres",
      numero: 544,
      bairro: "Parque Industrial 200",
      cidade: "Maringá",
      estado: "PR",
      telefone_fixo: "(44) 2848-8012",
      celular: "(44) 98137-8485",
      altura: "1,90",
      peso: 59,
      tipo_sanguineo: "A-",
      cor: "roxo",
    },
  ],
  posts: [
    { id: 0, title: "Hello, world!" },
    { id: 1, title: "FooBar" },
  ],
  comments: [
    { id: 0, post_id: 0, author: "John Doe", body: "Sensational!" },
    { id: 1, post_id: 0, author: "Jane Doe", body: "I agree" },
  ],
});
