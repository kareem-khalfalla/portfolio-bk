const url = "http://localhost:8088/api/projects";
const Projects = async () => {
  const data = await fetch(url);
  const jsonData = await data.json();

  const project = jsonData
    .map((item) => {
      const temp = `
            <div class="card">
                <img src="${item.image}" />
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <ul>
                        <li title="Technologies used to built this app">${
                          item.tags.length > 0
                            ? item.tags
                                .map((tag) => `<span>${tag.name}</span>`)
                                .join("")
                            : ""
                        }</li>
                        <li title="Description">${item.description}</li>
                        <li title="Created at">${item.created_at}</li>
                    </ul>
                </div>
            </div>
        `;
      return temp;
    })
    .join("");

  const template = `
        <div class="wrapper">
            ${project}
        </div>
    `;

  return template;
};
export default Projects;
