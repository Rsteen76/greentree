<template>
<v-data-table
     v-model="selected"
    :headers="headers"
    :items="schedules"
    :pagination.sync="pagination"
    select-all
    item-key="name"
    class="elevation-5"
  >
    <template slot="headers" slot-scope="props">
      <tr class="text-xs-center">
        <th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          
          class="title"
        >
          {{ header.text }}
        </th>
        <th></th>
      </tr>
    </template>
    <template slot="items" slot-scope="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.date }}</td>
        <td class="text-xs-center">{{ props.item.location }}</td>
        <td class="text-xs-center">{{ props.item.meetingLeader }}</td>
        <td class="text-xs-center">{{ props.item.worshipLeader }}</td>
        <td class="text-xs-center">{{ props.item.teacher }}</td>
        <td class="text-xs-center">{{ props.item.busyBees }}</td>
        <td class="text-xs-center">{{ props.item.nursery }}</td>
        <td class="text-xs-center">{{ props.item.logistics }}</td>
                <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>

import { http } from "../config/http.js"

export default {
    data: () => ({
        errors: [],
        schedules: [],
        scheduleToDelete: {},
        alertSettings: {},
        scheduleToEdit: {},
        newSchedule: {},
        addDialog: false,
        deleteDialog: false,
        editDialog: false,
        headers: [
           { text: "Date", align: 'center' },
           { text: "Location", align: 'center'},
           { text: "Meeting Leader", align: 'center'},
           { text: "Worship Leader", align: 'center'},
           { text: "Teacher", align: 'center' },
           { text: "Busy Bees", align: 'center'},
           { text: "Nursery", align: 'center'},
           { text: "Logistics", align: 'center'}
        ]
    }),
    methods: {

        //Load all schedules from database
        load() {
            http
                .get("schedules")
                .then(response => {
                    this.schedules = response.data.schedules;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },

        //opens delete dialog
        setupDelete(schedule) {
            this.scheduleToDelete = schedule;
            this.deleteDialog = true;
        },

        //opens edit dialog
        setupEdit(schedule) {
            Object.keys(schedule).forEach(key =>  {
                this.userToEdit[key] = schedule[key];
            });
            this.editName = schedule.name;
            this.editDialog = true;
        },

        alert(success, callName, resource){
            console.log('Page Alerting')
            this.$emit('alert', success, callName, resource)
            this.load()
        }
    },
    mounted() {
        this.load();
    }
    // data () {
    //     return {
    //         schedule: {
    //             date: { label: "Date", class: "text-center" },
    //             location: { label: "Location", },
    //             meetingLeader: { label: "Meeting Leader" },
    //             worshipLeader: { label: "Worship Leader" },
    //             teacher: { label: "Teacher" },
    //             busyBees: { label: "Busy Bees" },
    //             nursery: { label: "Nursery" },
    //             logistics: { label: "Logistics" },
    //             actions: { label: 'Action', 'class': 'text-center' }
    //         },
    //         schedules: [],
    //         errors: []
    //     }
    // },
    // created() {
    //     axios.get("http://localhost:8080/schedule")
    //     .then(response => {
    //         this.schedules = response.data
    //     })
    //     .catch(e => {
    //         this.errors.push(e)
    //     })
    // },
    // methods: {
    //     details (schedule) {
    //         this.$router.push({
    //             name: "EditSchedule",
    //             params: { id: schedule._id }
    //         })
    //     }
    // }
}
</script>
