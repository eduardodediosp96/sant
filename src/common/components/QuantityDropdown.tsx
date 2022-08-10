import Select from 'react-select'

interface QuantityDropdownProps {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

const QuantityDropdown = ({ quantity, setQuantity }: QuantityDropdownProps) => {
    const quantityOptions = Array.from(Array(10).keys()).map((option) => { return { label: option.toString(), value: option } });

    return <Select value={{ label: quantity.toString(), value: quantity }} options={quantityOptions} placeholder="Quantity" onChange={(quantity) => setQuantity(quantity?.value || 0)} />
}

export default QuantityDropdown;