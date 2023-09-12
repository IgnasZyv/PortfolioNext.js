
const ProjectData = [
    {
        id: 1,
        title: "Android Voting Application",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed euismod, nisi quis aliquet lacinia, nisl nisi aliquam nunc, ",
        backgroundSrc: "/projects/votingApp/polls3.jpg"
    },
    {
        id: 2,
        title: "Java Ice Arena Simulation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed euismod, nisi quis aliquet lacinia, nisl nisi aliquam nunc, ",
        backgroundSrc: "/projects/skatingArena/overview.png"
    },
    {
        id: 3,
        title: "Vehicle Charging Device Search",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed euismod, nisi quis aliquet lacinia, nisl nisi aliquam nunc, ",
        backgroundSrc: "/projects/phpQuery/overview.png"
    }
]

export const FindProjectById = (id: number) => {
    console.log("FindProjectById: " + id)

    const project = ProjectData.find((project) => project.id === id);

    if (project) {
        return project;
    }

    return null
}

export default ProjectData;

