import React from 'react';
import renderer from 'react-test-renderer';
import TabPanel from './index';


describe('TabPanel', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<TabPanel value={0} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with property variants', () => {
        const tree = renderer
            .create((
                <React.Fragment>
                    <TabPanel value={0}>
                        children 1
                    </TabPanel>
                    <TabPanel value={0}>
                        children 2
                    </TabPanel>
                    <TabPanel value={1} />
                </React.Fragment>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
