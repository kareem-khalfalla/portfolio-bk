const url = "https://kareem-khalfalla.herokuapp.com/api/projects";
const Projects = async () => {
    const response = await fetch(url);
    const { data } = await response.json();
    const project = data
        .map((item) => {
            const temp = `
            <div class="card">
                <img src="${item.image}" alt="${item.title}" class="img-fluid" />
                <div class="card-body">
                    <h3 title="app name">${item.title}</h3>
                    <dl>
                    <dt>technologies:</dt>
                    <dd title="technologies used to built this app">
                    <ul>
                    ${item.tags.length > 0
                && item.tags
                    .map((tag) => `<li>${tag}</li>`)
                    .join("")

                }
                    </ul>
                    </dd>
                        <dt>live preview:</dt>
                        <dd title="live preview"><a href="${item.url}" target="_blank">visit</a></dd>
                        <dt>status:</dt>
                        <dd title="status" class="${item.status}">${item.status}</dd>
                        <dt>description:</dt>
                        <dd title="description">${item.description || ''}</dd>
                        <dt>last modified at:</dt>
                        <dd title="last modified at">${item.last_modified_at}</dd>
                        <dt>author:</dt>
                        <dd title="author">${item.author}</dd>
                    </dl>
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
