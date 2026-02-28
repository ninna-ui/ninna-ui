import { config } from '@ninna-ui/test-config';
import { mergeConfig } from 'vitest/config';

export default mergeConfig(config, {
    test: {
        name: 'forms',
    },
});
