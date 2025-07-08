import { cloneDeep } from "lodash"
import _get from "lodash/get"
import _set from "lodash/set"


export const addItemToSection = ({ section, path, defaultItem, onChange}) => {
    const updatedProps = cloneDeep(section.props)
    const existingItems = _get(updatedProps, path)

    if (!Array.isArray(existingItems)) return;

    // Create a new item with default values
    existingItems.push(defaultItem)
    _set(updatedProps, path, existingItems)
    onChange(updatedProps)
};

// Remove item by index from a nested array in the section's props
export const removeItemFromSection = ({ section, path, index, onChange}) => {
    const updatedProps = cloneDeep(section.props)
    const existingItems = _get(updatedProps, path)

    if (!Array.isArray(existingItems) || index < 0 || index >= existingItems.length) return;

    // Remove the item at the specified index
    existingItems.splice(index, 1)
    _set(updatedProps, path, existingItems)
    onChange(updatedProps)
}