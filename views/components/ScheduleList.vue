<template>
<b-container>
    <b-card bg-variant="light" class="text-center">
        <b-row>
            <b-col cols="12">
                <h2>Schedule List
                    <b-button href="#/add-schedule">Add new Schedule</b-button>
                </h2>
                <b-table striped hover :items="schedules" :fields="fields">
                    <template slot="actions" scope="row">
                        <b-btn size="sm" @click.stop="details(row.item)">Update</b-btn>
                    </template>
                </b-table> 
                <ul v-if="error && errors.length">
                    <li v-for="error of errors">
                        {{error.message}}
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-card>
   
</b-container>

</template>

<script>

import axios from "axios"

export default {
    name: "ScheduleList",
    data () {
        return {
            fields: {
                date: { label: "Date", class: "text-center" },
                location: { label: "Location", },
                meetingLeader: { label: "Meeting Leader" },
                worshipLeader: { label: "Worship Leader" },
                teacher: { label: "Teacher" },
                busyBees: { label: "Busy Bees" },
                nursery: { label: "Nursery" },
                logistics: { label: "Logistics" },
                actions: { label: 'Action', 'class': 'text-center' }
            },
            schedules: [],
            errors: []
        }
    },
    created() {
        axios.get("http://localhost:3000/schedule")
        .then(response => {
            this.schedules = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
    methods: {
        details (schedule) {
            this.$router.push({
                name: "EditSchedule",
                params: { id: schedule._id }
            })
        }
    }
}
</script>
