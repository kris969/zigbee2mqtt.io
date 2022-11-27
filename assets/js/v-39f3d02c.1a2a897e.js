"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[13607],{50428:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-39f3d02c","path":"/devices/511.344.html","title":"Iluminize 511.344 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Iluminize 511.344 control via MQTT","description":"Integrate your Iluminize 511.344 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-04-08T17:49:06.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action_color (composite)","slug":"action-color-composite","link":"#action-color-composite","children":[]},{"level":3,"title":"Action_color_temperature (numeric)","slug":"action-color-temperature-numeric","link":"#action-color-temperature-numeric","children":[]},{"level":3,"title":"Action_group (numeric)","slug":"action-group-numeric","link":"#action-group-numeric","children":[]},{"level":3,"title":"Action_transition_time (numeric)","slug":"action-transition-time-numeric","link":"#action-transition-time-numeric","children":[]},{"level":3,"title":"Action_step_size (numeric)","slug":"action-step-size-numeric","link":"#action-step-size-numeric","children":[]},{"level":3,"title":"Action_rate (numeric)","slug":"action-rate-numeric","link":"#action-rate-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1669541044000},"filePathRelative":"devices/511.344.md"}')},40311:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(66252);const o=(0,n._)("h1",{id:"iluminize-511-344",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#iluminize-511-344","aria-hidden":"true"},"#"),(0,n.Uk)(" Iluminize 511.344")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"511.344")],-1),r=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee handheld remote RGBW 4 channels")],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"battery, action, action_color, action_color_temperature, action_group, action_transition_time, action_step_size, action_rate, linkquality")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/511.344.jpg",alt:"Iluminize 511.344"})])],-1),u=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),h=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>color_move</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>hue_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>recall_*</code>, <code>on</code>, <code>off</code>.</p><h3 id="action-color-composite" tabindex="-1"><a class="header-anchor" href="#action-color-composite" aria-hidden="true">#</a> Action_color (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;action_color&quot;: {&quot;x&quot;: VALUE, &quot;y&quot;: VALUE}}</code></p><ul><li><code>x</code> (numeric): undefined.</li><li><code>y</code> (numeric): undefined.</li></ul><h3 id="action-color-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#action-color-temperature-numeric" aria-hidden="true">#</a> Action_color_temperature (numeric)</h3><p>color temperature value. Fixed values for each key press: 145, 175, 222, 304, 480 mired. Value can be found in the published state on the <code>action_color_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mired</code>.</p><h3 id="action-group-numeric" tabindex="-1"><a class="header-anchor" href="#action-group-numeric" aria-hidden="true">#</a> Action_group (numeric)</h3><p>Shows the zigbee2mqtt group bound to the active data point EP(1-4).. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-transition-time-numeric" tabindex="-1"><a class="header-anchor" href="#action-transition-time-numeric" aria-hidden="true">#</a> Action_transition_time (numeric)</h3><p>Value can be found in the published state on the <code>action_transition_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-step-size-numeric" tabindex="-1"><a class="header-anchor" href="#action-step-size-numeric" aria-hidden="true">#</a> Action_step_size (numeric)</h3><p>Value can be found in the published state on the <code>action_step_size</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-rate-numeric" tabindex="-1"><a class="header-anchor" href="#action-rate-numeric" aria-hidden="true">#</a> Action_rate (numeric)</h3><p>Value can be found in the published state on the <code>action_rate</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22),p={},m=(0,i(83744).Z)(p,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[c,(0,n._)("tr",null,[r,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Iluminize"},{default:(0,n.w5)((()=>[(0,n.Uk)("Iluminize")])),_:1})])]),l,s,d])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),u,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);