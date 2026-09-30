import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
        {
            name: 'Monkey D. Luffy',
            nickname: 'Mugiwara',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Roronoa Zoro',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Vinsmoke Sanji',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Nami',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Ussop',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Nico Robin',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Franky',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Brook',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Jimbei',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Akainu',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Aokiji',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Arlong',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Bartholomew Kuma',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Blackbeard',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Boa Hancock',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Bon Clay',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Buggy',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Caesar Clown',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Cavendish',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Coby',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Sir Crocodile',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Curly Dadan',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Django',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Dracule Mihawk',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Don Quixote Doflamingo',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Don Quixote Rocinante',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Eneru',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Mr. 3',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Gecko Moria',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Gol D. Roger',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Hatchan',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Helmeppo',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Kizaru',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Monkey D. Dragon',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Monkey D. Garp',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Nefeltari Vivi',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Portgaz D. Ace',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Sabo',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Sengoku',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Shanks',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Silvers Rayleigh',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Smoker',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Tashigi',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Trafalgar Law',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Whitebeard',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Tony Tony Chopper',
            urlImage: '',
            ability: ''
        }
    ];
    const devilFruit = [
        {
            name: 'Gomu Gomu no Mi',
            description: 'Gomu Gomu no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Bara Bara no Mi',
            description: 'Bara Bara no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Awa Awa no Mi',
            description: 'Awa Awa no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Ushi Ushi no Mi',
            description: 'Ushi Ushi no Mi, Model: Giraffe',
            model: 'Giraffe',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Yami Yami no Mi',
            description: 'Yami Yami no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Sara Sara no Mi',
            description: 'Sara Sara no Mi, Model: Axolotl',
            model: 'Axolotl',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Mera Mera no Mi',
            description: 'Mera Mera no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Ope Ope no Mi',
            description: 'Ope Ope no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Ito Ito no Mi',
            description: 'Ito Ito no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Goru Goru no Mi',
            description: 'Goru Goru no Mi',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Batto Batto no Mi, Model',
            description: 'Batto Batto no Mi, Model: Vampire',
            model: 'Vampire',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Tori Tori no Mi, Model',
            description: 'Tori Tori no Mi, Model: Nue',
            model: 'Nue',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Vegapunk\'s man-made Devil Fruit',
            description: 'Vegapunk\'s man-made Devil Fruit',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        },
        {
            name: 'Caesar\'s SMILE',
            description: 'Caesar\'s SMILE',
            type: 'LOGIA',
            urlImage: '',
            ability: ''
        }
    ];
    return {characters, devilFruit};
  }
}
