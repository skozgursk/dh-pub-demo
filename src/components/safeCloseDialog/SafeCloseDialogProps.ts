export default interface SafeCloseDialogProps {
    title: string
    text: string
    actions: {
        cancel: string
        submit: string
    }
    onSubmit: () => void
}