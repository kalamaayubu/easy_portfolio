import { SECTION_MAP } from '@/lib/sectionMap'

const SectionRender = ({ id, variant, props }) => {
 const Component = SECTION_MAP[id]?.[variant];
 console.log("Rendering👌👌:", id, variant, props);

 return Component ? <Component {...props}/> : null;
}

export default SectionRender