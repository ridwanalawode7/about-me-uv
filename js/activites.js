//This manages the activites Listed in the activities section

const LEARNING = [
  {
    actName: 'Mechanics Of Materials',
    actMeta: 'Engineering',
    actDesc: `The field of mechanics of materials, typically refers to various methods of calculating the stresses and strains in structural members, such as beams, columns, and shafts.`,
  },
  {
    actName: 'React Js',
    actMeta: 'Programming',
    actDesc: `React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.`,
  },
  {
    actName: 'Node Js',
    actMeta: 'Programming',
    actDesc: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.`,
  },
  {
    actName: 'Blender',
    actMeta: 'Design',
    actDesc: `Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.`,
  },
];

const PROJECTS = [
  {
    actName: 'A.S.S.I.C',
    actMeta: 'Website',
    actDesc: `Advanced Space System Information Catalogue is a personal project that aims to create a space information website offering information about what is known about the universe for educative purpose.`,
  },
  {
    actName: 'My Web Dev Portfolio Website',
    actMeta: 'Website',
    actDesc: `This objective of this project is to build a wed developer portfolio website that showcases my skills, projects and experiences as a web developer.`,
  },
];

const BOOKS = [
  {
    actName: `Quiet: The Power of Introverts in a World That Can't Stop Talking`,
    actMeta: 'by Susan Cain',
    actDesc: `Quiet is a 2012 nonfiction book written by American author and lecturer Susan Cain. Cain argues that modern Western culture misunderstands and undervalues the traits and capabilities of introverted people, leading to "a colossal waste of talent, energy, and happiness".`,
  },
  {
    actName: `Science and Human Behavior`,
    actMeta: 'by Burrhus Frederic Skinner',
    actDesc: `A detailed study of scientific theories of human nature and the possible ways in which human behavior can be predicted and controlled.`,
  },
];

const LEARNING_CONTAINER = document.getElementById('learning_');
const PROJECTS_CONTAINER = document.getElementById('projects_');
const BOOKS_CONTAINER = document.getElementById('books_');

function displayActivities(activityObject, activityRoot) {
  for (const entry of activityObject) {
    activityRoot.innerHTML += `<div class="act-item">
                    <div class="act-name-head">
                      <div class="act-name"><h4>${entry.actName}</h4></div>
                      <div class="act-exp-btn" role="button" aria-label="Expand Activities" tabindex="0">
                        <svg viewBox="0 0 6.3499999 3.743854">
                          <g id="layer1">
                            <path
                              d="M 3.175,3.743854 0,0.568854 0.568854,0 3.175,2.619375 5.781146,0.013229 6.35,0.582083 Z"
                              id="path2"
                              style="stroke-width: 0.264583"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div class="act-meta">${entry.actMeta}</div>
                    <div class="act-body">
                      <p>${entry.actDesc}</p>
                    </div>
                  </div>`;
  }
}

displayActivities(LEARNING, LEARNING_CONTAINER);
displayActivities(PROJECTS, PROJECTS_CONTAINER);
displayActivities(BOOKS, BOOKS_CONTAINER);
