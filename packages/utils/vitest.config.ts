import { config } from '@ninna-ui/test-config';
import { mergeConfig } from 'vitest/config';

export default mergeConfig(config, {
    test: {
        // utils are mostly pure functions but cn might test class merging which is fine in node or jsdom
    },
});
