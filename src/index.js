export default function ({ Plugin }) {
    return new Plugin('remove-prop-types', {
        visitor: {
            ClassProperty(node) {
                if (node.key.name === 'propTypes') {
                    this.dangerouslyRemove();
                }
            }
        }
    });
};
