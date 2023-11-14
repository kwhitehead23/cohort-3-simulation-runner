// const ruleset = [
//   {
//     id: 1,
//     all: rule.rules[0].conditions.map((condition) => {
//       return {
//         name: "Bilbo",
//         creation_date: fact: condition.fact,
//         rules: [
//           {
//             operator: 'equal',
//             value: condition.value,
//             id: 1,
//           },
//         ],
//         rulesetId: 1,
//       };
//     }),
//   },
//   {
//     priority: 1,
//     conditions: [
//       {
//         event: {
//           id: 2,
//           ruleId: 1,
//           fact: 'FRONT',
//           value: 'WALL',
//         },
//         eventType: 'FORWARD',
//       },
//     ],
//     params: {
//       ruleId: rule.rules[0].id,
//     },
//   },
// ];

// const maxIterations = 10;

// const runSimulation = () => {
//   for (let i = 0; i < maxIterations; i++) {
//     const engine = new Engine();
//     let facts = {
//       FRONT: 'WALL',
//       LEFT: 'OPEN',
//       RIGHT: 'END',
//       BEHIND: 'WALL',
//     };

//     ruleset.forEach((rule) => {
//       engine.addRule({
//         conditions: {
//           all: rule.rules[0].conditions.map((condition) => {
//             return {
//               fact: condition.fact,
//               operator: 'equal',
//               value: condition.value,
//             };
//           }),
//         },
//       });

//       engine
//         .run(facts)
//         .then(({ events }) => {
//           if (events[0].type === 'FORWARD') {
//             // Your logic for movement or other actions here
//           } else {
//             // Handle other event types or actions
//           }
//         });
//     });
//   }

//   // Return the updated state after running the simulation
//   return newState;
// };
