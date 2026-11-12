(function(root){
'use strict';
const source={
  organization:'U.S. Naval Observatory, Astronomical Applications Department',
  kind:'computed astronomical records',
  retrieved:'2026-11-11',
  apiVersion:'4.0.1',
  documentation:'https://aa.usno.navy.mil/data/api',
  definitions:'https://aa.usno.navy.mil/faq/RST_defs',
  standard:'https://www.nextgenscience.org/pe/1-ess1-2-earths-place-universe',
  place:'Washington, DC, USA',
  latitude:38.9,longitude:-77.03,timeZoneHours:-5,daylightSaving:false,
  method:'Durations are sunset minus sunrise using the returned times rounded to minutes. All requests use fixed UTC-5 with daylight saving disabled; these are not local daylight-saving clock labels. The offset does not affect the within-day duration comparison. Bars share one scale and represent computed sunrise-to-sunset intervals, not measured sunshine, weather or the path of the Sun.',
  limitations:'USNO rise/set calculations use a level horizon and average atmospheric conditions. Local terrain and atmospheric conditions can change observed event times. These three dated examples do not establish every seasonal day or every place. Twilight is outside the sunrise-to-sunset interval used here.',
  safety:'Never look directly at the Sun. These supplied records allow indoor comparison without observing sunrise or sunset.'
};
const records=[
  {id:'dc-winter-2026',date:'2026-01-15',dateLabel:'January 15, 2026',season:'Winter',rise:'07:25',set:'17:10',minutes:585,relative:'Less daylight than the spring and fall dates in this set.'},
  {id:'dc-spring-2026',date:'2026-04-15',dateLabel:'April 15, 2026',season:'Spring',rise:'05:32',set:'18:45',minutes:793,relative:'More daylight than the winter and fall dates in this set.'},
  {id:'dc-fall-2026',date:'2026-10-15',dateLabel:'October 15, 2026',season:'Fall',rise:'06:18',set:'17:30',minutes:672,relative:'More daylight than the winter date and less than the spring date in this set.'}
].map(record=>Object.freeze({...record,sourceUrl:'https://aa.usno.navy.mil/api/rstt/oneday?date='+record.date+'&coords=38.9,-77.03&tz=-5&dst=false',sourceKind:source.kind,place:source.place}));
Object.freeze(records);Object.freeze(source);
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const scaleMaximum=Math.max(...records.map(r=>r.minutes));
function barWidth(record){return Math.round(record.minutes/scaleMaximum*36000)/100;}
function render(){
 const cards=records.map(record=>'<article class="panel daylight-card"><h4>'+esc(record.season)+' · '+esc(record.dateLabel)+'</h4><svg viewBox="0 0 400 50" style="width:100%;max-width:480px;height:auto" role="img" aria-label="'+esc(record.season+' daylight bar. '+record.relative)+'"><line x1="15" y1="5" x2="15" y2="45" stroke="#355b50" stroke-width="3"/><rect x="15" y="12" width="'+barWidth(record)+'" height="26" rx="3" fill="#e8b93d" stroke="#355b50" stroke-width="2"/></svg><p>'+esc(record.relative)+'</p></article>').join('');
 const provenance=records.map(record=>'<li><a href="'+esc(record.sourceUrl)+'" target="_blank" rel="noopener noreferrer">USNO computation: '+esc(record.dateLabel)+'</a> — sunrise '+record.rise+', sunset '+record.set+'; derived interval '+record.minutes+' minutes (adult reference only).</li>').join('');
 return '<section class="daylight-evidence" aria-label="Supplied seasonal daylight evidence"><div class="lesson-kicker">LOOK · COMPARE · EXPLAIN</div><h3>Daylight in one place</h3><p><strong>'+esc(source.place)+'</strong></p><p>These cards use a scientist-run service’s calculations for three dates. They are not pictures of the weather or observations made by a child.</p><p>Compare the bars: a longer bar means more daylight between sunrise and sunset. All bars use the same scale. You do not need to read clock times or calculate hours.</p>'+cards+'<p><strong>Tell a partner:</strong> Compare the winter date with the spring date. Then compare winter with fall. Point to a card supporting each answer.</p><p><strong>Keep the claim small:</strong> These cards describe these three dates in this one place. They do not show every date, every place or how cloudy it was.</p><p>'+esc(source.safety)+'</p><details class="daylight-source"><summary>Grown-up source and method notes</summary><p>Source: '+esc(source.organization)+'. Retrieved '+source.retrieved+'. API version '+source.apiVersion+'. Data type: '+esc(source.kind)+'; not field measurements.</p><p>Requested coordinates: '+source.latitude+' latitude, '+source.longitude+' longitude. All three queries use time-zone offset -5 and dst=false. Seasons are labeled for this Northern Hemisphere location.</p><p>'+esc(source.method)+'</p><ul>'+provenance+'</ul><p>'+esc(source.limitations)+'</p><p><a href="'+source.documentation+'" target="_blank" rel="noopener noreferrer">USNO API documentation</a> · <a href="'+source.definitions+'" target="_blank" rel="noopener noreferrer">USNO rise/set definitions</a> · <a href="'+source.standard+'" target="_blank" rel="noopener noreferrer">NGSS 1-ESS1-2</a></p><p>The child task compares relative daylight amounts. Numeric values here document the evidence and are not required calculations or Grade 1 science assessment items. Educator review and observations across additional dates remain necessary.</p></details></section>';
}
root.WonderDaylightEvidence={records,source,render,barWidth};
})(globalThis);
