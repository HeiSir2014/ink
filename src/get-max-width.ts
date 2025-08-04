import type { Node as YogaNode } from './yoga-proxy.js';
import Yoga from './yoga-proxy.js';

const getMaxWidth = (yogaNode: YogaNode) => {
	return (
		yogaNode.getComputedWidth() -
		yogaNode.getComputedPadding(Yoga.EDGE_LEFT) -
		yogaNode.getComputedPadding(Yoga.EDGE_RIGHT) -
		yogaNode.getComputedBorder(Yoga.EDGE_LEFT) -
		yogaNode.getComputedBorder(Yoga.EDGE_RIGHT)
	);
};

export default getMaxWidth;
