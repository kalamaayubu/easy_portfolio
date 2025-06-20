import { SECTION_MAP } from '@/lib/sectionMap'

const SectionRender = ({ template_metadata, id, variant, props }) => {
    const Component = SECTION_MAP[id]?.[variant];
    console.log(`TEMPLATE METADATA: ${template_metadata}`)

    return Component ? <Component template_metadata={ template_metadata } section_id={id} {...props}/> : null;
}

export default SectionRender