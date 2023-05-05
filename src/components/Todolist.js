import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  BackHandler,
  Alert
} from "react-native";
import React, { useState } from "react";

const Project_ToDo = () => {
  const [shownModal, setShowModal] = useState(false);
  const [complete, setComplete] = useState(false);
  // const assignTasks = ["Study", "Swimming", "Watching Cricket"];
  const [assignTasks, setAssignTasks] = useState([
    { task: "Study", timeHour: 19, timeMin: 24 }
    , { task: "Swimming", timeHour: 17, timeMin: 29 }
    , { task: "Dancing", timeHour: 20, timeMin: 54 }
  ]);

  const Remind = (task_calc_time, taskName) => {
    const date = new Date();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    console.log(time);
    let time_calc = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
    console.log("Time Calculated: ", time_calc);
    console.log("Task Calculated Time: ", task_calc_time);

    let remind = task_calc_time - time_calc;
    console.log("remind time: ", remind);
    if (remind>0)
    {
    setTimeout(() => {
      console.log("Do Your Task: ", taskName);
      Alert.alert("Do Your Task: ", taskName);
    }, remind * 1000);
  }
  }
  // let initialTasks = [
  //   {task:"Study",timeHour:19,timeMin:24}
  // ,{task:"Swimming",timeHour:17,timeMin:29}
  // ,{task:"Dancing",timeHour:20,timeMin:54}
  //               ] ;
  // // console.log(initialTasks);


  // const [assignTaskss,setAssignTaskss] = useState([]);
  // setAssignTaskss({...assignTaskss,...initialTasks});
  // setAssignTaskss([...assignTaskss,{task:"Dancing",timeHour:20,timeMin:54}]);

  // const finalTasks = [...assignTaskss,...initialTasks];
  // console.log("Final Tasks: ",finalTasks); 
  // console.log(assignTaskss);
  // setAssignTaskss(finalTasks);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState();
  const [newHour, setNewHour] = useState();
  const [newMin, setNewMin] = useState();

  // const date = new Date();
  // let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  // console.log(time);
  // let time_calc = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();

  // const [assignTasks,]

  const showAssignTasks = () => {

    return (
      <FlatList showVerticalScrollIndicator={false} data={assignTasks} renderItem={(element) => {

        {
          // let task_calc_time = element.item.timeHour * 60 * 60 + element.item.timeMin * 60;
          // console.log(task_calc_time)
          // Remind(task_calc_time,element.item.task);
          // addEventListener()

        }

        return (

          <TouchableOpacity onPress={() => {
            // const index = assignTasks.indexOf(element.item);
            let tempTasks = [...assignTasks];
            // console.log("Before: ",tempTasks);

            let tempInitialComTask = [...completedTasks];
            // console.log("TempInitialCompTask: ",tempInitialComTask);

            let tempcomTask = {
              task: element.item.task,
              timeHour: element.item.timeHour,
              timeMin: element.item.timeMin
            }
            // console.log("TempComTask: ",tempcomTask);

            tempInitialComTask.push(tempcomTask);
            // console.log("TempInitialCompTask after push: ",tempInitialComTask);

            // let compTask =tempInitialComTask;
            // let compTask =[...tempInitialComTask];
            // completedTasks.push(tempcomTask);
            // console.log("Completed Tasks: ",compTask);

            tempTasks = tempTasks.filter((e) => {
              return e.task !== element.item.task;
            });


            // console.log(assignTasks);
            // console.log("After: ",tempTasks);
            setAssignTasks(tempTasks);
            // console.log("Assign Task:: ",assignTasks);
            // console.log(index);
            // if (index > -1) { // only splice AssignTasksay when item is found
            //   assignTasks.splice(index, 1); // 2nd parameter means remove one item only
            // }
            // let AssignTaskscopy= [...assignTasks];
            // console.log("Completed task: ",comTask);
            // AssignTaskscopy.slice(index,1);
            // setAssignTasks(AssignTaskscopy);
            setCompletedTasks(tempInitialComTask);
            // console.log("Completed: ",completedTasks);

          }}>
            <View style={styles.task}>
              <View style={styles.circle}>
              </View>
              <View>

                <Text style={styles.taskName}>{element.item.task}</Text>
                <View style={{ flexDirection: "row", }}>
                  <Image source={require("../../assets/icons/notification.png")} style={{ width: 17, height: 17 }} />
                  <Text style={{ fontSize: 12 }}>{element.item.timeHour}:{element.item.timeMin}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

        );
      }}>
      </FlatList>

    );
  }
  const showCompletedTasks = () => {
    return (
      <View>
        <FlatList showVerticalScrollIndicator={false} data={completedTasks} renderItem={(element) => {


          return (
            <>


              <TouchableOpacity onPress={() => {
                let tempCompTasks = [...completedTasks];
                tempCompTasks = tempCompTasks.filter((e) => {
                  return e.task !== element.item.task;
                });
                setCompletedTasks(tempCompTasks);



                // const index = completedTasks.indexOf(element.item);
                // console.log(completedTasks);
                // console.log(index);
                // if (index > -1) { // only splice AssignTasksay when item is found
                //   completedTasks.splice(index, 1); // 2nd parameter means remove one item only
                // }
                // let completedTasksCopy = [...completedTasks];
                // completedTasksCopy.slice(index, 1);
                // setCompletedTasks(completedTasksCopy);

              }}>
                <View style={styles.completeddtask}>
                  <View >
                    <Image source={require("../../assets/icons/check_circle.png")}
                      style={styles.completeCircle}
                    />

                  </View>
                  <View>

                    <Text style={styles.completedtaskName}>{element.item.task}</Text>
                    <View style={{ flexDirection: "row", }}>
                      <Image source={require("../../assets/icons/notification.png")} style={{ width: 17, height: 17 }} />
                      <Text style={{ fontSize: 12 }}>{element.item.timeHour}:{element.item.timeMin}</Text>
                    </View>

                  </View>
                  <View>



                  </View>
                </View>
              </TouchableOpacity>
            </>

          );
        }}>
        </FlatList>
      </View>
    );
  }

  const handleBackButton = () => {
    console.log("Back Button Pressed");
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    return true;
  }

  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 15,
          // flex:1,
        }}
      >
        <View>
          <Text style={{
            // 
            fontSize: 25, fontWeight: "bold"
          }}>
            {" "}
            Hey 👋, Gaurav{" "}
          </Text>
          {/* <Text style={{ fontSize: 15 }}> 4 task for you buddy</Text> */}
        </View>
      </View>
      <ScrollView >
        <View style={styles.innerContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Assigned: ⏲️
          </Text>
          <View>
            <View style={styles.assigntask}>
              {assignTasks.length != 0 ?

                showAssignTasks()



                : ""}

            </View>
          </View>


          {/* <TouchableOpacity onPress={() => {
          setComplete(true);
        }}><Text>Completed</Text></TouchableOpacity> */}



          {/* Complted Tasks  */}
          {completedTasks.length != 0 ?
            <View style={styles.completedtask}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {" "}
                Completed : ✅{" "}
              </Text>

              {showCompletedTasks()}

            </View> : ""}


        </View>
      </ScrollView>

      <View
        style={styles.addButtonView}
      >
        <TouchableOpacity
          onPress={() => {
            setShowModal(true)
            BackHandler.addEventListener("hardwareBackPress", handleBackButton);

          }
          }
          style={styles.addButton}
        >
          <Text style={{ fontSize: 38, fontWeight: "bold" }}> + </Text>
        </TouchableOpacity>
      </View>
      {/* ****** Modal from here ********* */}

      <Modal
        visible={shownModal}
        animationType="slide"
        onRequestClose={() => (setShowModal(false))}
      >

        <View
          style={{
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "space-between",
            paddingVertical: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {" "}
              Hey 👋, Gaurav{" "}
            </Text>
            {/* <Text style={{ fontSize: 15 }}> 4 task for you buddy</Text> */}
          </View>
        </View>
        <Text
          style={{
            marginVertical: 15,

            fontSize: 23,
            fontWeight: "bold",
          }}
        >
          {" "}
          Add a Task Here:
        </Text>

        <TextInput
          placeholder="Title"
          // value=""
          onChangeText={(taskName) => {
            setNewTask(taskName);
          }}
          style={{
            backgroundColor: "rgb(220,220,220)",
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 14,
            marginVertical: 10,
            width: "90%",
            alignSelf: "center",
            fontSize: 18,
          }}
        />
        <Text style={{
          marginTop: 12,
          marginLeft: 10,
          fontSize: 18,
          fontWeight: "bold",
        }}>Remind at: </Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput placeholder="Hour" onChangeText={(text) => setNewHour(text)} style={styles.timeFields}></TextInput>
          <TextInput placeholder="Min" onChangeText={(text) => setNewMin(text)} style={styles.timeFields}></TextInput>
        </View>


        {/* <TextInput
          placeholder="Description"
          value=""
          onChangeText={() => { }}
          style={{
            backgroundColor: "rgb(220,220,220)",
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical: 10,
          }}
          multiline={true}
          numberOfLines={6}
        /> */}


        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
              // console.log(newTask);
              let AllAssignTasks = [...assignTasks];
              let tempAssignTasks = {
                task: newTask,
                timeHour: newHour,
                timeMin: newMin
              }
              let task_calc_time = newHour * 60 * 60 + newMin * 60;
              Remind(task_calc_time, newTask);

              AllAssignTasks.push(tempAssignTasks)
              setAssignTasks(AllAssignTasks);
              setNewTask("");
              setNewHour("");
              setNewMin("");




            }}
            style={{
              backgroundColor: "blue",
              width: 100,
              borderRadius: 10,
              alignItems: "center",
              padding: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22 }}>Add</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    // </View>
  );
};

export default Project_ToDo;

const styles = StyleSheet.create({
  container:
  {
    margin: 12,
    flex: 1,
    borderRadius: 20,
    borderTopRightRadius: 70,
    marginHoriZontal: 10,
    // backgroundColor: "red",
  },
  assigntask:
  {
    // height: 230,
    // backgroundColor: "pink",
    marginVertical: 8,
  },
  addButton:
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  addButtonView:
  {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 10
  },
  innerContainer:
  {
    // backgroundColor: "blue"
  },
  completedTask:
  {
    backgroundColor: "white",
    // position:"absolute",
  },
  completedTasks:
  {
    backgroundColor: "cyan",
    // height:220,

    // position:"absolute",
  },
  task:
  {
    height: 52,
    backgroundColor: "#ddd",
    borderRadius: 13,
    flexWrap: "wrap",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",



  },
  completeddtask:
  {
    height: 52,
    backgroundColor: "#ddd",
    borderRadius: 13,
    flexWrap: "wrap",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    // textDecorationLine:"line-through",



  },
  circle:
  {
    width: 25,
    height: 25,
    borderWidth: 2,
    marginHorizontal: 14,
    // marginVertical:14,
    borderRadius: 50
  },
  completeCircle:
  {
    width: 30,
    height: 30,
    // borderWidth: 2,
    marginHorizontal: 11,
    // marginVertical:14,
    // borderRadius: 50
  },
  taskName:
  {
    fontSize: 20,
    // marginVertical:10,
    // alignSelf:"center",
    // justifyContent:"center",
    // alignItems:"center",

  },
  completedtaskName:
  {
    fontSize: 20,
    textDecorationLine: "line-through",
  },
  timeFields:
  {
    // padding:10,
    backgroundColor: "rgb(220,220,220)",
    margin: 10,
    marginLeft: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginVertical: 10,
    width: "41.5%",
    // alignSelf: "center",
    fontSize: 18,
  }
});
