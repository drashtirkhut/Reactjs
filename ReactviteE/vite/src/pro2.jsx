// export default function Clock({ time }) {
//     let hours = time.getHours();
//     if (hours >= 0 && hours <= 6) {
//       document.getElementById('time').className = 'night';
//     } else {
//       document.getElementById('time').className = 'day';
//     }
//     return (
//       <h1 id="time">
//         {time.toLocaleTimeString()}
//       </h1>
//     );
//   }



// // import Panel from './Panel.js';
// // import { getImageUrl } from './utils.js';

// export default function Profile({ person }) {
//   return (
//     <Panel>
//       <Header person={person} />
//       <Avatar person={person} />
//     </Panel>
//   )
// }

// function Header({ person }) {
//   return <h1>{person.name}</h1>;
// }

// function Avatar({ person }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={50}
//       height={50}
//     />
//   );
// }


// export default function StoryTray({ stories }) {
//     stories.push({
//       id: 'create',
//       label: 'Create Story'
//     });
  
//     return (
//       <ul>
//         {stories.map(story => (
//           <li key={story.id}>
//             {story.label}
//           </li>
//         ))}
//       </ul>
//     );
//   }
  
  