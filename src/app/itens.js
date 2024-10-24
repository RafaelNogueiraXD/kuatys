const picadao = [
    { 
      name: "Picadão da Casa", 
      description: "Alcatra, coração de frango, calabresa, batata frita, pão de alho e queijo", 
      price: "R$ 98"
    },
    { 
      name: "Picadão Campeiro", 
      description: "Filé de frango, coração de frango, linguiça c/ queijo, batata frita, ovo de codorna e presunto", 
      price: "R$ 100 "
    },
    { 
      name: "Picadão Tropeiro", 
      description: "Alcatra, filé de frango, calabresa, polenta frita, pão de alho e salame", 
      price: "R$ 91 "
    },
    { 
      name: "Picadão Gaúcho", 
      description: "Alcatra, tulipa de frango, linguiça c/ queijo, polenta frita, ovo de codorna e azeitona", 
      price: "R$ 97"
    },
    { 
      name: "Picadão Gaudério", 
      description: "Cordeiro, tulipa de frango, linguiça c/ queijo, mandioca frita, farofa e queijo", 
      price: "R$ 110 "
    },
    { 
      name: "Picadão Fandangueiro", 
      description: "Cordeiro, chicken, calabresa, mandioca frita, ovo de codorna e azeitona", 
      price: "R$ 110 "
    },
    { 
      name: "Picadão Prendado", 
      description: "Tulipa de frango, coração de frango, linguiça c/ queijo, batata frita, anéis de cebola e presunto", 
      price: "R$ 100"
    },
    { 
      name: "Picadão Bagual", 
      description: "Alcatra, filé de frango, cordeiro, mandioca frita, pão de alho e farofa", 
      price: "R$ 116"
    }
  ];
  
  const barcas = [
    { 
      name: "Barca Os 3 Mosqueteiros", 
      description: "Batata frita, polenta frita, mandioca frita e queijo derretido", 
      price: "R$ 48 "
    },
    { 
      name: "Barca de Frios", 
      description: "Queijo, presunto, salame, pepino, azeitona, ovo de codorna e peito de peru", 
      price: "R$ 60 "
    },
    { 
      name: "Barca da Granja", 
      description: "Batata frita, anéis de cebola, tulipa de frango, nuggets e azeitona", 
      price: "R$ 57 "
    },
    { 
      name: "Barca Calabresa Acebolado", 
      description: "Batata frita, calabresa acebolado e azeitona", 
      price: "R$ 45"
    },
    { 
      name: "Barca de Entrevero", 
      description: "Pão de alho, filé de frango, calabresa, alcatra, carne suína, azeitona, cebola e pimentão", 
      price: "R$ 65 "
    }
  ];
  
  const porcoes = [
    { name: "Batata Frita", amount: "400 gramas", price: "R$ 20 "},
    { name: "Polenta Frita", amount: "400 gramas", price: "R$ 15 "},
    { name: "Mandioca Frita", amount: "400 gramas", price: "R$ 25 "},
    { name: "Anéis de Cebola", amount: "10 unidades", price: "R$ 12 "},
    { name: "Chicken Nuggets", amount: "300 gramas", price: "R$ 24 "},
    { name: "Fritas c/ Queijo", amount: "400 gramas de batata + queijo derretido", price: "R$ 25 "},
    { name: "Fritas Cheddar e Bacon", amount: "400 gramas de batata + queijo cheddar e bacon", price: "R$ 32 "},
    { name: "Polenta c/ Queijo", amount: "400 gramas + queijo derretido", price: "R$ 20 "},
    { name: "Polenta c/ Queijo e Salame", amount: "400 gramas c/ queijo derretido e salame picado", price: "R$ 25 "},
    { name: "Torre de Batata", description: "Batata frita, queijo, bacon, calabresa e coração de frango", price: "R$ 70 "},
    { name: "Torre de Polenta", description: "Polenta frita, queijo, bacon, calabresa e coração de frango", price: "R$ 60 "},
    { name: "Torre de Mandioca", description: "Mandioca frita, queijo, bacon, calabresa e coração de frango", price: "R$ 75 "}
  ];
  
  const bebidas = [
    { name: "Refri 2 Litros", description: "Coca cola, Fanta e Guaraná", price: "R$ 12 "},
    { name: "Cerveja Long Neck", description: "Budweiser, Stella, Heineken, Corona", price: "R$ 9 "},
    { name: "Cerveja Latão", description: "Bohêmia, Puro Malte, Original", price: "R$ 8 "}
  ];
const cardapio = {
    bebidas : bebidas,
    porcoes : porcoes,
    barcas : barcas,
    picadao: picadao
};
export default  cardapio;