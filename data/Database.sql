CREATE TABLE USERS
(
    UserID INT NOT NULL UNIQUE,
    UserName VARCHAR(255) NOT NULL,
    UserPassword VARCHAR(25) NOT NULL,
    CONSTRAINT User_PK PRIMARY KEY(UserName,UserID)
);

CREATE TABLE GROUPS (
    GroupID INT NOT NULL UNIQUE,
    GroupName VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT Group_PK PRIMARY KEY(GroupID,GroupName)
);

CREATE TABLE TASKS (
    TaskID INT NOT NULL UNIQUE,
    TaskName VARCHAR(255) NOT NULL,
    TaskDescription VARCHAR(255) NOT NULL,
    TaskDeadline DATE NOT NULL,
    TaskPriority VARCHAR(255) NOT NULL,
    TaskStatus VARCHAR(255) NOT NULL,
    GroupName VARCHAR(255) NOT NULL,
    CreatedBy VARCHAR(255) NOT NULL,
    CONSTRAINT Task_PK PRIMARY KEY (TaskID)
);
