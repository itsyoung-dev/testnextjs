interface TypeGateProps {
    children: React.ReactNode;
    allowedType: boolean;
}
export const TypeGate = ({ children, allowedType }: TypeGateProps) => {

    if (!allowedType) {
        return <div></div>;
    }

    return <>{children}</>;
};
