import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon style={{fontSize: "larger"}}>
                <Icon name="search" />
                Not found bro
            </Header>
            <Segment.Inline>
                <Button className="button-59" as={Link} to='/learningUnits'>
                    Return to learning units page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}