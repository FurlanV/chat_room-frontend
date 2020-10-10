import React from 'react'
import { Segment, Header, Image, Grid } from 'semantic-ui-react'

const Topbar = props => {

    return (
        <Segment>
            <Grid>
                <Grid.Column width={12}>
                    <Header as='H2'>ChatRoom</Header>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Header as='h5' textAlign='right' style={{ marginTop: 5 }}>
                        
                    </Header>
                </Grid.Column>
            </Grid>
        </Segment>
    )

}

export default Topbar