import React from "react"
import { connect } from "react-redux"

import { Card, Feed } from 'semantic-ui-react'

const UserFeed = props => {

    return (
        <Card style={{ width: '100%', marginTop: 15 }}>
            <Card.Content>
                <Card.Header>Recent Activity</Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Label image="/avatar/large/Anon.png" />
                        <Feed.Content>
                            <Feed.Date content='1 day ago' />
                            <Feed.Summary>
                                Jenny Hess<a> liked</a> your <a>comment</a> on the group.
                                </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image="/avatar/large/Anon.png" />
                        <Feed.Content>
                            <Feed.Date content='3 days ago' />
                            <Feed.Summary>
                                Molly Malone sent you a <a>message</a>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                        <Feed.Label image="/avatar/large/Anon.png" />
                        <Feed.Content>
                            <Feed.Date content='4 days ago' />
                            <Feed.Summary>
                                Elliot Baker <a>marked</a> you in a <a>picture</a>.
                                </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
        </Card>
    )

}

export default UserFeed