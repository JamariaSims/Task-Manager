import React from "react";
import { connect } from "react-redux";

const getData = () => {
    const { Client } = require("pg");

    const client = new Client({ ssl: true });

    // const client = new Client({
    //     host: "ec2-54-165-90-230.compute-1.amazonaws.com",
    //     user: "aqjxxzjhxerhfj",
    //     port: 5432,
    //     password:
    //         "55b4943f13b6e0022b2f94bd55cd07e18d185e07c44e1d1dbacbf837518b9c8f",
    //     database: "d7pgrkjofhe540",
    // });

    client.connect();

    client.query("Select * from users", (err, res) => {
        if (!err) {
            console.log(res.rows);
        } else {
            console.log(err.message);
        }
    });
};
function WalledGarden() {
    getData();
    return <div>WalledGarden</div>;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
};

export default connect(mapStateToProps)(WalledGarden);
