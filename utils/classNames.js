// by the headlessUi
export default function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}