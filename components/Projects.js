const url = "https://kareem-khalfalla.herokuapp.com/api/projects";
const Projects = async () => {
    const response = await fetch(url);
    const { data } = await response.json();

    const projects = data
        .map((project) => {
            const temp = `
            <div class="card">
                <img src="${project.image_url}" alt="${project.title}" class="img-fluid" />
                <h3 title="app name">${project.title}</h3>
                <div class="card-body">
                    <dl>
                    <dt>technologies:</dt>
                    <dd title="technologies used to built this app">
                    <ul>
                    ${project.tags.length > 0
                && project.tags
                    .map((tag) => `<li>${tag}</li>`)
                    .join("")

                }
                    </ul>
                    </dd>
                    <dt>description:</dt>
                    <dd title="description">${project.description || ''}</dd>
                    <dt>last modified at:</dt>
                    <dd title="last modified at">${project.last_modified_at}</dd>
                    <hr />
                        <div class="flex justify-between">
                            <span title="live preview" class="${project.status === 'inactive' ? 'disabled' : ''}"><a href="${project.url}" target="_blank">preview</a></span>
                            <span title="status" class="${project.status}">${project.status}</span>
                        </div>
                    </dl>
                </div>
            </div>
        `;
            return temp;
        })
        .join("");

    const template = `
        <div class="wrapper">
            ${projects}
        </div>
    `;

    return template;
};
export default Projects;
