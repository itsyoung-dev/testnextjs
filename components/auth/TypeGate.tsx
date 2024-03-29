interface TypeGateProps {
    children: React.ReactNode;
    allowedType: boolean | undefined | null;
}
export const TypeGate = ({ children, allowedType }: TypeGateProps) => {
    if (!allowedType) {
        return false;
    }

    return <>{children}</>;
};
