export async function generateMetadata({ params}) {
    const { userName } = params;
    return {
        title: userName || "My Portfolio",
        description: `Portfolio of ${userName || "My Portfolio"}`,
    }
}

const TemplateLayout = ({ children }) => {
    return <>{ children }</>
}

export default TemplateLayout;
