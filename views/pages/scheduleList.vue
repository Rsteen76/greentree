<template>
  <v-container class="pa-0">
    <v-container>
      <template>
        <v-layout row>
          <v-flex>
            <v-card>
              <v-toolbar class="primary primaryText--text">
                <v-toolbar-title> Schedules </v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- Add Dialog Button -->
                <v-dialog v-model="addDialog" lazy absolute max-width="50%">
                  <v-btn class="primaryText--text" icon slot="activator">
                    <v-icon> control_point </v-icon>
                  </v-btn>

                  <!-- Add Dialog -->
                  <addSchedule  @closeAdd="addDialog = false" @alert="alert">
                  </addSchedule>
                </v-dialog>
              </v-toolbar>

              <!-- Build the table -->
              <v-data-table v-model="selected" :headers="headers" :items="schedules" 
                select-all item-key="name" class="elevation-5">
                <template slot="headers" slot-scope="props">
                  <tr class="text-xs-center">
                    <th>
                    <th v-for="header in props.headers" :key="header.text" class="body-2">
                      {{ header.text }}
                    </th>
                    <th></th>
                  </tr>
                </template>
                <template slot="items" slot-scope="props">
                  <tr>
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
                      
                      <v-dialog v-model="editDialog" lazy absolute max-width="50%">
                        <v-btn class="" icon slot="activator"> 
                        <v-icon small class="" @click="setupEdit(props.item)">
                        edit 
                      </v-icon>
                      </v-btn>
                      <editSchedule :schedule="scheduleToDelete" @closeDelete="deleteDialog = false" @alert="alert"></editSchedule>
                      </v-dialog>
                      
                      <v-dialog v-model="deleteDialog" lazy absolute max-width="50%">
                        <v-btn class="" icon slot="activator"> 
                        <v-icon small class="mr-1" @click="setupDelete(props.item)">
                        delete 
                      </v-icon>
                      </v-btn>
                      <deleteSchedule :schedule="scheduleToDelete" @closeDelete="deleteDialog = false" @alert="alert"></deleteSchedule>
                      </v-dialog>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
    </v-container>

  </v-container>
</template>

<script>

import { http } from "../config/http.js"
import addSchedule from "../components/addSchedule.vue"
import deleteSchedule from "../components/deleteSchedule.vue"
import editSchedule from "../components/editSchedule.vue"

export default {
    data: () => ({
        selected: [],
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
    components: {
      addSchedule: addSchedule,
      deleteSchedule: deleteSchedule,
      editSchedule: editSchedule
    },

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
                this.scheduleToEdit[key] = schedule[key];
            });
            this.editDate = schedule.date;
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
}
</script>
