const url = "https://kareem-khalfalla.herokuapp.com/api/projects";
const Projects = async () => {
    const response = await fetch(url);
    const { data } = await response.json();
    const projects = data
        .map((project) => {
            const temp = `
            <div class="card">
                <img src="${project.image_url}" alt="${project.title}" class="img-fluid" />
                <div class="card-body">
                    <h3 title="app name">${project.title}</h3>
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
                        <dt>live preview:</dt>
                        <dd title="live preview"><a href="${project.url}" target="_blank">visit</a></dd>
                        <dt>status:</dt>
                        <dd title="status" class="${project.status}">${project.status}</dd>
                        <dt>description:</dt>
                        <dd title="description">${project.description || ''}</dd>
                        <dt>last modified at:</dt>
                        <dd title="last modified at">${project.last_modified_at}</dd>
                        <dt>author:</dt>
                        <dd title="author">${project.author}</dd>
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
