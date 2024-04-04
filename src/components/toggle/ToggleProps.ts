export default interface ToggleProps {
    label: string,
    onChange: (e: boolean) => void
    value: boolean
}