import React from 'react';
import ReactDOM from 'react-dom';

import wizard from "./lib/wizard";

const steps = [
  {
      question: 'Che tipo di attività devi svolgere?',
      category: 'Attività',
      answers: [
          {
              id: 100,
              title: 'Tenere in ordine il mio giardino',
              description: 'Falciatura ordinaria del prato, rifinitura aiuole',
              image: 'attivita_1.jpg'
          },
          {
              id: 101,
              title: 'Pulire e rinnovare il giardino',
              description: 'Presenza di arbusti, erbe alte e spesse, piante infestanti da rimuovere',
              image: 'attivita_2.jpg'
          }
      ]
  },
  {
      question: 'Sono presenti piante o ostacoli?',
      category: 'Ostacoli',
      answers: [
          {
              id: 102,
              title: 'Sono presenti aiuole e ostacoli di piccole dimensioni',
              description: null,
              image: 'ostacoli_1.jpg'
          },
          {
              id: 103,
              title: 'Sono presenti arbusti, alberi e ostacoli di grandi dimensioni',
              description: null,
              image: 'ostacoli_2.jpg'
          },
          {
              id: 104,
              title: 'No, non son presenti piante e ostacoli',
              description: null,
              image: 'ostacoli_3.jpg'
          }
      ]
  },
  {
      question: 'Ci sono pendenze o affossamenti?',
      category: 'Pendenza',
      answers: [
          {
              id: 105,
              title: 'Sì, il mio terreno è pendente o presenta degli affossamenti',
              description: null,
              image: 'pendenza_1.jpg'
          },
          {
              id: 106,
              title: 'No, ho un terreno piano',
              description: null,
              image: 'ostacoli_2.jpg'
          }
      ]
  },
  {
      question: 'Che dimensioni ha il tuo terreno?',
      category: 'Dimensioni',
      answers: [
          {
              id: 107,
              title: 'Fino a 100 m2',
              description: null,
              image: null
          },
          {
              id: 108,
              title: 'Da 100 a 500 m2',
              description: null,
              image: null
          },
          {
              id: 109,
              title: 'Da 500 a 1000 m2',
              description: null,
              image: null
          },
          {
              id: 110,
              title: 'Da 1000 a 2000 m2',
              description: null,
              image: null
          }
      ]
  }
];

const tree = {
  children: [
    {
      // attività - manutenzione
      children: [
        {
          // no ostacoli
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  // dimensioni
                  results: [8]
                },
                {
                  results: [8]
                },
                {
                  results: [9]
                },
                {
                  results: [10]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [1]
                },
                {
                  results: [2]
                },
                {
                  results: [2]
                },
                {
                  results: [3, 2]
                }
              ]
            }
          ]
        },
        {
          // ostacoli - picoli
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  results: [6]
                },
                {
                  results: [6]
                },
                {
                  results: [7]
                },
                {
                  results: [7]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [4]
                },
                {
                  results: [4]
                },
                {
                  results: [5]
                },
                {
                  results: [3, 5]
                }
              ]
            }
          ]
        },
        {
          // ostacoli - grandi
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  results: [6]
                },
                {
                  results: [6]
                },
                {
                  results: [7]
                },
                {
                  results: [7]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [4]
                },
                {
                  results: [4]
                },
                {
                  results: [5]
                },
                {
                  results: [3, 5]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      // attività - rinnovare
      children: [
        {
          // no ostacoli
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  results: [14]
                },
                {
                  results: [14]
                },
                {
                  results: [11]
                },
                {
                  results: [11]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [14]
                },
                {
                  results: [14]
                },
                {
                  results: [11]
                },
                {
                  results: [11]
                }
              ]
            }
          ]
        },
        {
          // ostacoli - picoli
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  results: [12, 14]
                },
                {
                  results: [12, 14]
                },
                {
                  results: [13]
                },
                {
                  results: [13]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [12, 14]
                },
                {
                  results: [12, 14]
                },
                {
                  results: [15]
                },
                {
                  results: [15]
                }
              ]
            }
          ]
        },
        {
          // ostacoli - grandi
          children: [
            {
              // pendenza - affossamenti
              children: [
                {
                  results: [12, 14]
                },
                {
                  results: [12, 14]
                },
                {
                  results: [13]
                },
                {
                  results: [13]
                }
              ]
            },
            {
              // pendenza - piano
              children: [
                {
                  results: [12, 14]
                },
                {
                  results: [12, 14]
                },
                {
                  results: [13]
                },
                {
                  results: [13]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

describe('Navigate', () => {
  it('navigate on 0,0,0,0 array', () => {
    const answers = [0,0,0,0];
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      [8]
    );
  });
  it('navigate on 0,0,0,2 array', () => {
    const answers = [0,0,0,2];
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      [9]
    );
  });
  it('navigate on 0,0,1,0 array', () => {
    const answers = [0,0,1,0];
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      [1]
    );
  });
  it('navigate on 0,0,1,3 array', () => {
    const answers = [0,0,1,3];
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      [3,2]
    );
  });
  it('navigate with numbers of steps = 0', () => {
    const answers = [0,0,1,3];
    expect(
      wizard.navigate(answers,tree,0)
    ).toEqual(
      undefined
    );
  });
  it('navigate with numbers of steps < 0', () => {
    const answers = [0,0,1,3];
    expect(
      wizard.navigate(answers,tree,-1)
    ).toEqual(
      undefined
    );
  });
  it('navigate without tree', () => {
    const answers = [0,0,1,3];
    expect(
      wizard.navigate(answers,undefined,steps.length)
    ).toEqual(
      undefined
    );
  });
  it('navigate without tree.children', () => {
    const answers = [0,0,1,3];
    expect(
      wizard.navigate(answers,{},steps.length)
    ).toEqual(
      undefined
    );
  });
  it('navigate without answers', () => {
    const answers = undefined;
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      undefined
    );
  });
  it('navigate with selection.length < numberOfSteps', () => {
    const answers = [0,1,1];
    expect(
      wizard.navigate(answers,tree,steps.length)
    ).toEqual(
      undefined
    );
  });
});
