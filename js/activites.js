//This manages the activites Listed in the activities section

const LEARNING = [
    {
        actName: 'Something',
        actMeta: 'Something else',
        actDesc:
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias ipsum minus maiores tempora dolores maxime sapiente placeat dolorem architecto expedita, ex labore quasi. Dicta dolore minima facere commodi nemo?`,
    },
];

const PROJECTS = [
    {
        actName: 'Something',
        actMeta: 'Something else',
        actDesc:
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias ipsum minus maiores tempora dolores maxime sapiente placeat dolorem architecto expedita, ex labore quasi. Dicta dolore minima facere commodi nemo?`,
    },
];

const BOOKS = [
    {
        actName: 'Something',
        actMeta: 'Something else',
        actDesc:
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias ipsum minus maiores tempora dolores maxime sapiente placeat dolorem architecto expedita, ex labore quasi. Dicta dolore minima facere commodi nemo?`,
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